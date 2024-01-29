const DateTime = () => {
    const datetime = new Date()
    return <div className="absolute text-primary left-4 top-4">date</div>
}

export const Main = () => {
    return (
        <div className="flex flex-col items-end justify-center h-4/5 p-4 rounded-3xl overflow-hidden relative">
            <img
                className="object-cover object-center scale-110 h-full blur-sm absolute z-10"
                src="https://images.pexels.com/photos/1132024/pexels-photo-1132024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
            />
            <div className="z-20 text-primary text-right">
                <DateTime />
                <h1 className="scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl">-10 &deg;C</h1>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Feels like -20 &deg;C</h4>
            </div>
        </div>
    )
}
