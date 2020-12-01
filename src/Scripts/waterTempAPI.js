export const getWaterTemp = () => {
    const apiUrl = 'https://iot.fvh.fi/opendata/uiras/'
    return fetch(apiUrl)
        .then((res) => res.json())
        .then((result) => {
            return result;
        });
}
