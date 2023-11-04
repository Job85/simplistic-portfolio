import Image from "next/image";
import styles from "./ProjectCards.module.css";

const cards = [
    {
        id: "1",
        img: "/Restaurant-Inventory-App.png",
        title: "Restaurant Inventory App",
        title2: "Technologies",
        site: "https://restaurant-inventory-77229.web.app/",
        gitHub: "https://github.com/Job85/Restaurant-Inventory-App",
        gitHub2: "https://github.com/Job85/inventory-app-backend",
        subTitle: "Languages",
        subTitle2: "Libraries & Environments",
        subTitle3: "Database",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "React Redux", "Axios", "Mongoose", "Font Awesome", "Node.js"],
        listGroup3: ["MongoDB"]
    },
    {
        id: "2",
        img: "/Token_Huntr.png",
        title: "Token Huntr",
        title2: "Technologies",
        site: "https://token-huntr-app.web.app/",
        gitHub: "https://github.com/Job85/token-huntr-app",
        gitHub2: "https://github.com/Job85/token-huntr",
        subTitle: "Languages",
        subTitle2: "Libraries & Environments",
        subTitle3: "Database",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "Styled-Components", "Validator.js", "Axios", "Font Awesome", "Node.js"],
        listGroup3: ["PostgreSQL"]
    },
    {
        id: "3",
        variant: "click",
        img: "/QCDetailing.png",
        title: "QC Detailing",
        title2: "Technologies",
        site: "https://qcdetailing.net/",
        subTitle: "Languages",
        subTitle2: "Libraries",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "Styled-Components", "Email.js", "React-Icons", "React-Hook-Forms"],
        listGroup3: ["PostgreSQL"]
    },
]

const ProjectCards = () => {

    return (
        <div className={styles.container}>
            {cards.map((card) => (
                <div
                    key={card.id}
                    className={styles.card_container}
                >
                    <h2>{card.title}</h2>
                    <div className={styles.img_container}>
                        <Image
                            src={card.img}
                            alt={card.title}
                            layout="responsive"
                            width={400}
                            height={300}
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />

                    </div>
                    <div>
                        <h3>{card.subTitle}</h3>
                        <p>{card.listGroup}</p>
                        <h3>{card.subTitle2}</h3>
                        <p>{card.listGroup2}</p>
                        <h3>{card.subTitle3}</h3>
                        <p>{card.listGroup3}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCards;