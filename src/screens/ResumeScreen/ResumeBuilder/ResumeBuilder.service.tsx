import {useState, useEffect} from "react";
import getTemplate from "../../../api/requests/getTemplate";

const Template = () => {
    const [data, setData] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [err, setErr] = useState<string>("");
    useEffect(() => {
        (async (): Promise<void> => {
            setLoading(true)
            await getTemplate().then(
                (r: any) => {
                    setData(r.data);
                    setLoading(false);
                },
                (e: any) => {
                    setErr(e.message);
                    setLoading(false)
                }
            )
        })();
    }, []);

    return {
        loading,
        data,
        err
    }
}
export {
    Template
}