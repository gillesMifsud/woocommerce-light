import {Page, NavController, NavParams} from 'ionic-angular';
import {Quizz} from '../models/quizz';
import {QuizzResultsPage} from './quizz-results.page';
import quizzes from '../../data/quizzes';

@Page({
  templateUrl: 'build/pages/quizz/Quizzes/templates/quizz.page.html',
})

export class QuizzPage {
  nav;
  quizz;

  constructor(nav: NavController, params: NavParams) {
    this.nav = nav;
    this.quizz = this.loadQuizz(params.get('topicId'));
  }

  loadQuizz(topicId) {
    const quizz = quizzes.filter((quizz) => {
      return quizz.topicId === topicId;
    })[0];
    return new Quizz(quizz);
  }

  onSubmit(event, answer) {
    this.quizz.submitAnswer(answer);
    if (this.quizz.isCompleted) {
      this.nav.setRoot(QuizzResultsPage, {
        quizz: this.quizz
      });
    }
  }

}
