export default function({children}) {
    return (
        <>
        <div className="flex items-center justify-center text-white font-extrabold">
            <h1 className=" mt-5 font-extrabold text-4xl font-serif">
                EVERY PERSON STARTS SOMEWHERE...
            </h1>
        </div>
        <div className="children">
            {children}
        </div>
        </>
    )
}