


export default function Card( { children }: { children: React.ReactNode; } ) {    

    return (
        <div className="card p-10">
            {children}
        </div>
    );
}