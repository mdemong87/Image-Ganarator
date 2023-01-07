import { useRouter } from "next/router";
import { useState } from "react";
import { useLoading } from "../../context/loadingContext";
import styles from "../../styles/bar/Bar.module.css";
import Container from "../Container";

export default function Bar() {

    const router = useRouter();
    const { setisLoading, setdata } = useLoading();
    const [text, settext] = useState('');



    const handleClick = async (e) => {
        e.preventDefault();
        if (text === '') {
            alert("Discribe Image frist...");

        } else {
            setisLoading(true);

            const response = await fetch(`/api`, {
                method: "POST",
                headers: {
                    "content-type": "application/josn"
                },
                body: JSON.stringify(text)
            })

            const data = await response.json();
            setdata(data);
            settext('');
            setisLoading(false);
            router.push("/editeimage");
        }
    }

    return (
        <div className={styles.barWrp}>
            <Container>
                <div className={styles.berContainer}>
                    <div className={styles.inputWrp}>
                        <input onChange={(e) => settext(e.target.value)} type="text" value={text} placeholder="Discribe what your wnat to see with phrases and saparated them with commnd" />
                    </div>
                    <div onClick={handleClick} className={styles.btnWrp}>
                        <button>Ganarate</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
