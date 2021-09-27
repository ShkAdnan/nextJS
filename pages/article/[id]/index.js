import { useRouter } from "next/dist/client/router";
import Link from "next/dist/client/link";
import { server } from "../../../config";

const article = ( { article } ) => {
   
    // const router = useRouter();
    // const { id } = router.query;
    return(
        <>  
            <h1>{ article.title} </h1>
            <p>{ article.body} </p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    );
};

// export const getServerSideProps = async ( context ) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//     const article = await res.json();

//     return {
//         props : {
//           article
//         }
//       }
// }

export const getStaticProps = async ( context ) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
  
    const article = await res.json();

    return {
      props : {
        article
      }
    }
  }

export const getStaticPaths = async () => {

    const res = await fetch(`${server}/api/articles`)
  
    const articles = await res.json();

    const ids      = articles.map( (arr) => arr.id);
   
    const paths    = ids.map( (arr) => {
       return ({
            params: { 
                id : arr.toString() 
            }
        })
    });

    return {
        paths,
        fallback : false
    }
}

export default article;