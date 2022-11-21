import Footer from "../Components/Footer";

function Layout({children}) {
    return ( 
        <>
            {children}
            <Footer></Footer>
        </>
     );
}

export default Layout;