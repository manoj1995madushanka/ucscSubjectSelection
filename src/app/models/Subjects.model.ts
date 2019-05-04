export interface Subject{
  subjectCode: string,
  subjectName: string,
  totalCredit: number,
  subjectYear: number,
  subjectSem: number,
  compulsoryForCSGeneral?: boolean,
  compulsoryForCSHons?: boolean,
  compulsoryForSEHons?: boolean,
  compulsoryForIS ?: boolean,
  compulsoryForISHons ?: boolean,
}
