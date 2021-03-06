import {
  getDatabase,
  ref,
  set,
  increment,
  update,
} from 'firebase/database';

class Write {
  static async itemRecommendation(name, desc, city, imgURL) {
    const db = getDatabase();
    set(ref(db, `recommendation/${city}/${name}`), {
      name,
      desc,
      city,
      imgURL,
    });
  }

  static async addUpvoteCount(city, id) {
    const db = getDatabase();
    update(ref(db, `Oleholehku/${city}/${id}/upvote`), {
      count: increment(-1),
    });
  }

  static async subtractUpvoteCount(city, id) {
    const db = getDatabase();
    update(ref(db, `Oleholehku/${city}/${id}/upvote`), {
      count: increment(1),
    });
  }

  static async updateUpvoteTrue(city, id, uid) {
    const db = getDatabase();
    update(ref(db, `Oleholehku/${city}/${id}/upvote/uid/${uid}`), {
      upvote: true,
    });
  }

  static async updateUpvoteFalse(city, id, uid) {
    const db = getDatabase();
    update(ref(db, `Oleholehku/${city}/${id}/upvote/uid/${uid}`), {
      upvote: false,
    });
  }

  static async addUpvoteUID(city, id, uid) {
    const db = getDatabase();
    update(ref(db, `Oleholehku/${city}/${id}/upvote/uid/${uid}`), {
      uid,
    });
  }
}

export default Write;
