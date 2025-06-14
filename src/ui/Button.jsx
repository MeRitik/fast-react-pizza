import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
    const base = 'bg-yellow-400 text-sm uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

    const styles = {
        primary: base + ' md:px-6 md:py-4 py-3 px-4',
        small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
        secondary: 'uppercase text-sm border-2 border-stone-300  font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:bg-stone-300 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5 py-2.5 px-4'
    }

    if (to)
        return <Link to={to} className={styles[type]}>{children}</Link>;

    return (
        <button
            disabled={disabled}
            className={styles[type]}
        >{children}</button>
    )
}
