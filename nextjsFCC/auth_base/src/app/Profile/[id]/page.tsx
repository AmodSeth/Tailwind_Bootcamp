export default function userProfile({params}:any) {
    return (
        <div className="flex flex-col min-h-screen">
            <h1>
                this is the ProfilePage
            </h1>
            <hr />
            <p className="text-4xl">
              <span>Profile Page {params.id}</span>  
           </p>
        </div>
    );
}