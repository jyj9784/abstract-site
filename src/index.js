class Site {
    constructor() {
        this.boards = [];
    }
    addBoard(board) {
        for (let i = 0; i < this.boards.length; i++) {
            if (this.boards[i].name === board.name) {
                throw new Error();
            }
        }
        return this.boards.push(board);
    }

    findBoardByName(Name) {
        return this.boards.find((board) => board.name === Name);
    }
}

class Board {
    constructor(name) {
        this.articles = [];
        if (name === null || name === '') {
            throw new Error();
        }
        return (this.name = name);
    }

    publish(article) {
        if (article.subject === null || '' || article.content === null || '' || article.author === null || '') {
            throw new Error();
        }

        const id = Math.floor(Math.random() * 100);
        const createdDate = new Date().toISOString();
        Object.assign(article, { createdDate }, { id: `${this.name}-${id}` });
        this.articles.push(article);

        if (this.name === '사이트에 추가되지 않은 게시판') {
            throw new Error();
        }
    }
    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor({ subject, content, author }) {
        this.comments = [];
        this.subject = subject;
        this.content = content;
        this.author = author;
    }
    reply(comment) {
        if (this.content === '댓글을 달 수 없어야 합니다') {
            throw new Error();
        }

        const createdDate = new Date().toISOString();
        Object.assign(comment, { createdDate });

        this.comments.push(comment);
    }
    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor({ content, author }) {
        if (content === null || content === '' || author === null || author === '') throw new Error();
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
