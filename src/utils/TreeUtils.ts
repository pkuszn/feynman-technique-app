export class TreeUtils {
    public static displayLoading() {
        let loader = document.getElementById("loading-container") as HTMLDivElement;
        loader.style.display = "block";
        setTimeout(() => {
            loader.style.display = "none";
        }, 30000);
    }
    
    public static hideLoading() {
        const loader = document.getElementById("loading-container") as HTMLDivElement;
        loader.style.display = "none";
    }
    
    public static redirect(url: string, ms: number = 5000) {
        if (url === "") return;
        window.setTimeout(function () {
            window.location.replace(url)
        }, ms)
    }
    
    public static createDateNowString(filename: string): string {
        if (filename === "") filename = "graph"
        let date = new Date();
        return filename.concat(date.toISOString(), ".png");
    }
}