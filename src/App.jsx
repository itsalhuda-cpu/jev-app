import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import AddProductForm from './components/AddProductForm';
import FilterPanel from './components/FilterPanel';
import ProductGrid from './components/ProductGrid';
import Toast from './components/Toast';
import './styles/App.css';

const STORAGE_KEY = 'jev-app-products-v1';
const THEME_KEY = 'jev-app-theme-v1';

const categories = ['الكل', 'مشروبات', 'حلويات', 'ملابس', 'إلكترونيات', 'مستلزمات'];

const starterProducts = [
  { id: 1, name: 'قهوة عربي', category: 'مشروبات', price: 18, stock: 12, image: '☕' },
  { id: 2, name: 'كيك الشوكولاتة', category: 'حلويات', price: 27, stock: 8, image: '🍰' },
  { id: 3, name: 'تيشيرت أسود', category: 'ملابس', price: 59, stock: 5, image: '👕' },
  { id: 4, name: 'سماعات لاسلكية', category: 'إلكترونيات', price: 129, stock: 3, image: '🎧' }
];

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : starterProducts;
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? JSON.parse(saved) : false;
  });

  const [filter, setFilter] = useState('الكل');
  const [toast, setToast] = useState(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Save products to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  // Toggle theme
  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (filter === 'الكل') return products;
    return products.filter((product) => product.category === filter);
  }, [filter, products]);

  // Calculate statistics
  const totalRevenue = products.reduce((sum, product) => sum + product.price * product.stock, 0);
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const averagePrice = totalProducts > 0 ? (totalRevenue / totalStock).toFixed(2) : 0;

  const bestCategory = useMemo(() => {
    const map = {};
    products.forEach((product) => {
      map[product.category] = (map[product.category] || 0) + product.stock;
    });
    const best = Object.entries(map).sort((a, b) => b[1] - a[1])[0];
    return best ? best[0] : '-';
  }, [products]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addProduct = (formData) => {
    const { name, category, price, stock, image } = formData;
    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      stock: Number(stock),
      image
    };
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`تم إضافة "${name}" بنجاح! ✓`, 'success');
  };

  const updateProduct = (id, updatedData) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? { ...product, ...updatedData } : product))
    );
    showToast('تم تحديث المنتج بنجاح! ✓', 'success');
    setEditingProduct(null);
  };

  const sellProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (product && product.stock > 0) {
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, stock: p.stock - 1 } : p))
      );
      showToast(`تم بيع "${product.name}" ✓`, 'success');
    } else {
      showToast('المنتج غير متوفر!', 'error');
    }
  };

  const deleteProduct = (id) => {
    const product = products.find((p) => p.id === id);
    setProducts((prev) => prev.filter((product) => product.id !== id));
    showToast(`تم حذف "${product?.name}" ✓`, 'warning');
  };

  const restockProduct = (id, amount) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: p.stock + amount } : p))
    );
    showToast('تم تحديث المخزون ✓', 'success');
  };

  const stats = {
    totalProducts,
    totalStock,
    totalRevenue,
    averagePrice,
    bestCategory
  };

  return (
    <div className="app-shell">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="content-grid">
        <Stats stats={stats} />

        <section className="panel-row">
          <AddProductForm onAdd={addProduct} editingProduct={editingProduct} setEditingProduct={setEditingProduct} />
          <FilterPanel filter={filter} setFilter={setFilter} filteredCount={filteredProducts.length} filteredStock={filteredProducts.reduce((sum, p) => sum + p.stock, 0)} />
        </section>

        <ProductGrid
          products={filteredProducts}
          onSell={sellProduct}
          onDelete={deleteProduct}
          onRestock={restockProduct}
          onEdit={setEditingProduct}
        />
      </main>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
}

export default App;
