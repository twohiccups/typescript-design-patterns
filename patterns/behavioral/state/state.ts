export class Article {
    private content: string;
    private articleState: ArticleState

    constructor() {
        this.content = '';
        this.articleState = new DraftState(this);
    }

    edit(content: string) {
        this.articleState.edit(content);
    }

    submit() {
        this.articleState.submit();
    }

    sendBack(reason: string) {
        this.articleState.sendBack(reason);
    }

    // Ideally this method would be private
    setState(articleState: ArticleState) {
        this.articleState = articleState;
    }

    setContent(content: string) {
        this.content = content;
    }

}
export abstract class ArticleState {

    constructor(protected article: Article) { }

    abstract edit(content: string): void;
    abstract sendBack(reason: string): void;
    abstract submit(): void;
}


export class DraftState extends ArticleState {

    edit(content: string): void {
        this.article.setContent(content);
    }

    submit(): void {
        this.article.setState(new ReviewState(this.article));
    }

    sendBack(reason: string): void {
        throw Error('Cannot send back - this is the first step');
    }
}

export class ReviewState extends ArticleState {
    edit(content: string): void {
        throw new Error('Cannot edit: under review.');
    }


    submit(): void {
        console.log('Article approved for publication');
        this.article.setState(new PublishedState(this.article));
    }

    sendBack(reason: string): void {
        console.log(`Sending back to draft. Reason: ${reason}`);
        this.article.setState(new DraftState(this.article));
    }
}


export class PublishedState extends ArticleState {
    edit(content: string): void {
        console.log('Attempted edit on the published article. Calling the police.')
    }

    submit(): void {
        throw Error('Already published: cannot re-publish.')
    }


    sendBack(reason: string): void {
        console.log(`Article is unpublished. Reason: ${reason}`);
        this.article.setState(new ReviewState(this.article));
    }
}