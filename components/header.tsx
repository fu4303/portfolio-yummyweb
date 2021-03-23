import styles from '../styles/header.module.scss'

const Header = (props): JSX.Element => {
    const links = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Blog", path: "/blog"},
        {name: "Projects", path: "/projects"},
        {name: "Contact", path: "/contact"},
    ]
    return (
        <header className={styles.header}>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <a className={link.name === props.active ? styles.active : ""} href={link.path}>{ link.name }</a>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header
