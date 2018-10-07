import {Page, NavController} from 'ionic-angular';
import {QuizzPage} from './Quizzes/pages/quizz.page';
import topics from './data/topics';

@Page({
  templateUrl: 'build/pages/quizz/topics.html',
  providers: [QuizzPage]
})

export class TopicsPage {
  nav;
  topics;

  constructor(nav: NavController) {
    this.nav = nav;
    this.topics = topics;
  }

  startQuizz(topic) {
    this.nav.push(QuizzPage, {
      topicId: topic.id
    });
  }
}
