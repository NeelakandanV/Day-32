import BaseApp from "./BaseApp";


export default function HomeComp(){
    return(
        <BaseApp title="HOME">
            <div className="HomeParent">
                    <div className="UserCont">
                        <p><b>Users</b></p>
                        <img src="https://www.prajwaldesai.com/wp-content/uploads/2021/02/Find-Users-Last-Logon-Time-using-4-Easy-Methods.jpg"/><br/>
                        <a href="/Users">Click for Users➡️</a>
                    </div>
                    <div className="BookCont">
                        <p><b>Books</b></p>
                        <img src="https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.webp?b=1&s=170667a&w=0&k=20&c=TRED57BZuROoCEP9kR85pW38PLz32onmM8106OoXeGQ="/><br/>
                        <a href="/Books">Click for Books➡️</a>
                    </div>
                </div>
            </BaseApp>
    );

}