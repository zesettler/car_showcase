export async function fetchCars() {
    const headers = {
        //'X-RapidAPI-Key': 'cceced3648msh6253de68d049534p1a8c6djsnfe60baf62a98',
        //'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}