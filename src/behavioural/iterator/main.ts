import { MyDataStructure } from './myDataStructure';
import { ReverseIterator } from './reverseIterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('ALBERT', 'NIKOLA', 'THOMAS');

// const [a, b] = dataStructure;

// for (const item of dataStructure) {
//   console.log(item);
// }

dataStructure.resetIterator();

dataStructure.chanceIterator(new ReverseIterator(dataStructure));
