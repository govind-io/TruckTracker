export default async function FetchData(){
    let response=await fetch("https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint",{
        method:"GET"
    })

    if(response.status==200){
        let result=await response.json()
        return {...result,statuscode:200}
    }

    else{
        return {...response,statuscode:response.status}
    }
    
}   