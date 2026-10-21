import styles from './navbar.module.css'

const navItems = [
    { id: "index", label: "For you" },
    { id: "Friends", label: "Friends" },
    { id: "Library", label: "Library" },
    { id: "Settings", label: "Settings" }
];

export default function Navbar({ setPage }) {
    return (
       <div className={styles.navbar}>
            
            {navItems.map(item => (
                <button 
                    key={item.id}
                    onClick={() => setPage(item.id)} 
                    className={styles.navButton}
                
                    >{item.label}
                </button>
            ))}
       </div>
    );
}