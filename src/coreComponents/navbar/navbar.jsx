import styles from './navbar.module.css'
import * as lucideIcons from 'lucide-react'



const navItems = [
    { id: "index", label: "For you", icon: lucideIcons.HomeIcon},
    { id: "Friends", label: "Friends", icon: lucideIcons.Users },
    { id: "Library", label: "Library", icon: lucideIcons.BookAIcon },
    { id: "Settings", label: "Settings", icon:lucideIcons.SettingsIcon }
];

export default function Navbar({ currentPage, setPage }) {
    return (
        <div className={styles.navbar}>
            {navItems.map(item => {
                const Icon = item.icon; // Assign to a capitalized variable so React knows it's a component
                return (
                    <button 
                        key={item.id}
                        onClick={() => setPage(item.id)}
                        className={`
                            ${styles.navButton}
                            ${currentPage === item.id ? styles.navButtonActive : ''}
                        `}
                    >
                        {Icon && <Icon/>}
                        <span>{item.label}</span>
                    </button>
                );
            })}
        </div>
    );
}