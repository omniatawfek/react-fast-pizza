import { Link } from 'react-router-dom';

export default function Button({ children, type, disabled, to }) {
  const base =
    'foucus:ring text-sm focus-ring-offset-2 inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring-yellow-300 disabled:cursor-not-allowed ';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'px-4 py-2.5 md:px-6 md:py-3.5 foucus:ring focus-ring-offset-2 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:text-stone-800 focus:ring-syone-200 disabled:cursor-not-allowed focus:bg-stone-300 hover:text-stone-800 text-sm',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
