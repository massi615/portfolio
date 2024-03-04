import { useRouter } from "next/router"
export default function Name() {
    const router = useRouter();
    return <h1>実績{router.query.name}のページです</h1>
}