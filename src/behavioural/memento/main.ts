import { ImageEditor } from './imageEditor';
import { ImageEditorBackup } from './imageEditorBackupManager';

const imageEditor = new ImageEditor('/image/memento/teste.png', 'png');
const backupManager = new ImageEditorBackup(imageEditor);

backupManager.backup();
imageEditor.convertImageTo('jpg');
backupManager.undo();

console.log(imageEditor);
