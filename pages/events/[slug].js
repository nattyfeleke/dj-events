import Layout from '../../components/Layout';
import {useRouter} from 'next/router'

export default function EventPage(){

    const router = useRouter();
    console.log(router)
    return (
        <Layout title={router.query.slug}>
            <h1>Event page {router.query.slug}</h1>
        
        </Layout>
    )
}