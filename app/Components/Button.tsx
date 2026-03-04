interface Button {
    title: string,
    background: string,
    color: string,
    onClick?: () => void
}
const Button = ({ title, background, color, onClick }: Button) => {
    return (
        <button
            className="w-44 h-12 px-6 py-3 rounded-xl font-semibold font-mono shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#14183B]"
            style={{ backgroundColor: background, color: color, border: 'none', gap: 10, opacity: 1 }}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
export default Button