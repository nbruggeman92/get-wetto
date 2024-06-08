// import React from 'react';
// import './Footer.css';

// const styles = {
//     footer: {
//         padding: '0px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         position: 'relative',
//         overflow: 'hidden',
//         zIndex: 1,
//         height: '150px',
//         marginTop: '-30px',
//     },
//     icon: {
//         fontSize: '3rem',
//         color: '#fff',
//         transition: 'transform 0.3s ease-in-out, color 0.3s ease-in-out',
//         animation: 'iconFloat 3s ease-in-out infinite',
//         '&:hover': {
//             color: '#ff5722',
//             animation: 'iconBounce 0.5s ease-in-out',
            
//           },
//     },
//     linksUl: {
//         listStyleType: 'none',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '0',
//         margin: '20px 0',
//         position: 'relative',
//         zIndex: 1,
//     },
//     linksLi: {
//         margin: '0 50px',
//         position: 'relative',
//         perspective: '1000px',
//         animation: 'fadeInUp 1s ease-in-out',
//         animationFillMode: 'both',
//     },
   
//     copyright: {
//         opacity: 0.8,
//         textAlign: 'center',
//         position: 'relative',
//         zIndex: 1,
//         animation: 'fadeInDown 1s ease-in-out',
//         animationFillMode: 'both',
//     },
//     footerBg: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         opacity: 0.8,
//         animation: 'gradientAnimation 10s ease-in-out infinite',
//     },
// };

// const githubUrls = [
//     'https://github.com/Moe1362',
//     'https://github.com/AlexCapilla',
//     'https://github.com/nbruggeman92',
//     'https://github.com/ccreed86',
// ];

// export default function Footer() {
//     const currentYear = new Date().getFullYear();

//     const handleIconHover = (e) => {
//         e.target.style.transform = 'rotateY(180deg)';
//     };

//     const handleIconHoverEnd = (e) => {
//         e.target.style.transform = 'rotateY(0)';
//     };

//     return (
//         <div style={styles.footer}>
//             <div style={styles.footerBg}></div>
//             <ul style={styles.linksUl}>
//                 {githubUrls.map((url, index) => (
//                     <li
//                         key={index}
//                         style={{
//                             ...styles.linksLi,
//                             ...styles.linksLiHover,
//                             animationDelay: `${index * 0.4}s`,
//                         }}
//                     >
//                         <a href={url} target="_blank" rel="noopener noreferrer">
//                             <i
//                                 className="fab fa-github"
//                                 style={styles.icon}
//                                 onMouseEnter={handleIconHover}
//                                 onMouseLeave={handleIconHoverEnd}
//                             ></i>
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//             <div className='copy' style={styles.copyright}>&copy; {currentYear} Created By Group 2</div>
//         </div>
//     );
// }


import React from 'react';
import './Footer.css';

const githubUrls = [
    'https://github.com/Moe1362',
    'https://github.com/AlexCapilla',
    'https://github.com/nbruggeman92',
    'https://github.com/ccreed86',
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleIconHover = (e) => {
        e.target.style.transform = 'rotateY(180deg)';
    };

    const handleIconHoverEnd = (e) => {
        e.target.style.transform = 'rotateY(0)';
    };

    return (
        <div className="footer">
            <div className="footer-bg"></div>
            <ul className="links-ul">
                {githubUrls.map((url, index) => (
                    <li
                        key={index}
                        className="links-li"
                        style={{ animationDelay: `${index * 0.4}s` }}
                    >
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <i
                                className="fab fa-github footer-icon"
                                onMouseEnter={handleIconHover}
                                onMouseLeave={handleIconHoverEnd}
                            ></i>
                        </a>
                    </li>
                ))}
            </ul>
            <div className='copy'>&copy; {currentYear} Created By Group 2</div>
        </div>
    );
}
