import { lazy, useState, Suspense, useTransition } from "react";
import { sum } from "../sum";

const AdminData = lazy(() => import("./AdminData").then(module => {
    return { default: module.AdminData }
}))

export default function Home() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isPending, startTransition] = useTransition();

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => alert(sum(2, 2))}>Add 2+2</button>
            <br />
            <br />
            <button onClick={() => {
                startTransition(() => {
                    setIsAdmin(prev => !prev)
                })
            }}>Toggle Admin</button>
            {isPending && "Loading"}
            <Suspense fallback={<h1>Loading...</h1>}>
                {isAdmin ? <AdminData /> : <h2>Not Admin</h2>}
            </Suspense>
        </>
    )
}