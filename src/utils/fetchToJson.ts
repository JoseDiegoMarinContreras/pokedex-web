const withJson = async <T>(request: Promise<Response>): Promise<T> => {
    const resonse = await request;
    const data = await resonse.json();

    return data;
}

export {
    withJson,
};