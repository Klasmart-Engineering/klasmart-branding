export class BrandingError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BrandingError";
    }
}
