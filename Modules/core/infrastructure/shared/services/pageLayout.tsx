import NavBar from "../../components/menu/NavBar";


export function PageLayout(props: any) {
        return (
            <div>
              <NavBar />
              {props.children}
            </div>
        );
}