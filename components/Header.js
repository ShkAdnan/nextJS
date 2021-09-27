import headerStyle from '../styles/Header.module.css';

const Header = () => {
    return(
        <>
            {/* <style jsx>
                {`
                .title{
                    color : red;
                    }
                `}
            </style> */}
            <h1 className={ headerStyle.title }>
                <span>webDev</span> News
            </h1>
            <p className={ headerStyle.description }>
                Keep upto date with latest news
            </p>
            
        </>
    );
};

export default Header;