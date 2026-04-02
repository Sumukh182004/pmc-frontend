// Dev
// const baseurl="https://rmcqpi9a6k.execute-api.ap-south-1.amazonaws.com/prod"
// Actual
// const baseurl = "https://2xfu6r88mg.execute-api.ap-south-1.amazonaws.com/prod"

// const baseurl="https://dv77uchjy2.execute-api.ap-south-1.amazonaws.com/prod"

const baseurl="https://pmcbe.vercel.app"

const fixDocUrl = (url) => {
    if (!url) return url;
    return url.replace('dcpr1.s3.ap-south-1.amazonaws.com', 'pmctender.s3.ap-south-1.amazonaws.com');
};

export { baseurl, fixDocUrl }
