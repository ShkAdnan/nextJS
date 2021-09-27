import Head from "next/dist/shared/lib/head";

const Meta = ({ title , description , keyword}) => {
    return (
        <>
           <Head>
                <meta charset="UTF-8" />
                <meta name="description" content={ description } />
                <meta name="keywords" content={ keyword } />
                <meta name="author" content="Adnan Asad" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> { title }</title>
            </Head>
        </>
    );
};

Meta.defaultProps = {
    title : 'web dev news',
    description : 'This is for practice purpose',
    keyword     : 'Practice'
}

export default Meta;