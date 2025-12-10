
type fetchProps = {
    url: string
}

export const handleGetResponse = async ({ url }: fetchProps) => {
    try {
        console.log(url);
        const response = await fetch(url,
            {
                headers: {
                    "content-type": "application/json"
                },
                method: "GET"
            }
        )

        const text = await response.text();

        const data = (() => {
            try {
                return JSON.parse(text);
            } catch {
                return text;
            }
        })();


        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText} → ${text}`);
        }

        console.log("data from resp",data);
        
        return data;
    } catch (error) {
        alert("Failed to fetch API" +  (error as Error).message)
        throw new Error("Failed to fetch API: " + (error as Error).message);

    }
}