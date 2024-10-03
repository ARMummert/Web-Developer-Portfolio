import ReactPDF from '@react-pdf/renderer';
import BatonTwirlingDemoPDF from './batontwirlingpdf'; 

ReactPDF.render(<BatonTwirlingDemoPDF />, `${__dirname}/batontwirlingdemo.pdf`);