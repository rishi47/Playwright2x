const ENV=
{
    BASE_URL:"https://www.google.com",
    TIMEOUT=3000,
    RETRIES=3,
    BROWSER:"Chrome"
}

const EXPECTED_RESPONSE={
    status:200,
    body:{
            user:{role:"admin",active:true}
    }
}