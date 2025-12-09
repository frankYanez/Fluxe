import styles from './PlanCard.module.css';

interface Feature {
    text: string;
    included: boolean;
}

interface PlanCardProps {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: Feature[];
    featured?: boolean;
    ctaText?: string;
    ctaHref?: string;
}

export default function PlanCard({
    name,
    price,
    period = '/mes',
    description,
    features,
    featured = false,
    ctaText = 'Comenzar',
    ctaHref = '#contacto',
}: PlanCardProps) {
    return (
        <div className={`${styles.planCard} ${featured ? styles.featured : ''}`}>
            {featured && <div className={styles.badge}>Más Popular</div>}

            <div className={styles.header}>
                <h3 className={styles.name}>{name}</h3>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>{price}</span>
                    <span className={styles.period}>{period}</span>
                </div>
                <p className={styles.description}>{description}</p>
            </div>

            <ul className={styles.features}>
                {features.map((feature, idx) => (
                    <li key={idx} className={`${styles.feature} ${!feature.included ? styles.notIncluded : ''}`}>
                        <svg
                            className={styles.icon}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {feature.included ? (
                                <path
                                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            ) : (
                                <path
                                    d="M15 5L5 15M5 5L15 15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            )}
                        </svg>
                        <span>{feature.text}</span>
                    </li>
                ))}
            </ul>

            <a href={ctaHref} className={`btn ${featured ? 'btn-primary' : 'btn-secondary'} ${styles.cta}`}>
                {ctaText}
            </a>
        </div>
    );
}
