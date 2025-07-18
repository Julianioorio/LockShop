interface Comment {
  id: number;
  user_name: string;
  user_email: string;
  rating: number;
  comment_text: string;
  date: string;
}

interface Product {
  id: number;
  title: string;
  short_description: string;
  description?: string;
  image: string;
  price: number;
  in_stock?: boolean;
  characteristics?: { [key: string]: string };
  comments?: Comment[];
}
export class ProductCard implements Product {
  id: number;
  title: string;
  short_description: string;
  description?: string;
  image: string;
  price: number;
  in_stock?: boolean;
  characteristics?: { [key: string]: string };
  comments?: Comment[];
  constructor(product: Product) {
    this.id = product.id;
    this.title = product.title;
    this.short_description = product.short_description;
    this.description = product.description;
    this.image = product.image;
    this.price = product.price;
    this.in_stock = product.in_stock;
    this.characteristics = product.characteristics;
    this.comments = product.comments;
  }
  getDisplayData() {
    return {
      id: this.id,
      title: this.title,
      short_description: this.short_description,
      ...(this.description && { description: this.description }),
      image: this.image,
      price: `${this.price % 1 === 0 ? this.price.toLocaleString("ru-RU", { maximumFractionDigits: 0 }) : this.price.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₽`,
      ...(this.in_stock !== undefined && { in_stock: this.in_stock }),
      ...(this.characteristics && {
        characteristics: Object.entries(this.characteristics),
      }),
      ...(this.comments && { rating: this.comments.length > 0 ? (this.comments.reduce((acc, comment) => acc + comment.rating, 0) / this.comments.length).toFixed(1) : 0 }),
      ...(this.comments && {
        comments: this.comments.map((comment) => ({
          name: comment.user_name,
          text: comment.comment_text,
          rating: comment.rating,
          date: new Date(comment.date).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        })),
      }),
    };
  }
}
