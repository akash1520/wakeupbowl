export default function quotes() {
    return (
        <div className="flex justify-start rounded-md min-w-fit items-center h-32 p-4 m-2 gap-4 shadow-green-400 shadow-md">
            <div className="h-20 border border-green-800 border-x-2"></div>
            <blockquote className="text-2xl font-semibold">
                <pre>&ldquo;Know what you eat
                <br/>
                Know why you eat!&rdquo;</pre>
            </blockquote>
        </div>
    )
}
