import EditeBar from "../../componnent/bar/EditeBar";
import Container from "../../componnent/Container";
import Header from "../../componnent/header/Header";
import { useLoading } from "../../context/loadingContext";
import styles from "../../styles/editeimage/editeimage.module.css";

export default function index() {

    const { data } = useLoading();
    const img = data.data;

    const style = {
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }


    return (
        <div>
            <Header />
            <Container>
                <div className={styles.editeArea}>
                    <div className={styles.bannerarea}>
                        <div style={style}>
                            {/* background Image here */}
                        </div>
                        <div>
                            <EditeBar />
                        </div>
                    </div>
                    <div className={styles.bannerarea}>
                        <div className={styles.tools}>

                        </div>
                        <div>
                            <button className={styles.dbtn}>Download</button>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}
