import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {
    let carriers = [
      { id: 'orange', name: 'Orange' },
      { id: 'vodafone', name: 'Vodafone' },
      { id: 'telekom', name: 'Telekom' }
    ];

    let plans = [
      { id: 'orange-me-8', name: 'Orange Me 8', monthlyCost: 8, minutes: 1000, sms: -1, data: 1, carrier: 'orange'},
      { id: 'orange-me-11', name: 'Orange Me 11', monthlyCost: 11, minutes: -1, sms: -1, minutesIntl: 200, data: 1.5, carrier: 'orange'},
      { id: 'orange-me-15', name: 'Orange Me 15', monthlyCost: 15, minutes: -1, sms: -1, minutesIntl: 300, data: 3.5, dataEES: 3.27, carrier: 'orange'},
      { id: 'orange-me-18', name: 'Orange Me 18', monthlyCost: 18, minutes: -1, sms: -1, minutesIntl: 400, data: 5, dataEES: 3.93, carrier: 'orange'},
      { id: 'smart-11', name: 'Smart 11', monthlyCost: 11, minutes: -1, minutesIntl: 200, sms: 250, data: 2, dataEES: 2, carrier: 'vodafone'},
      { id: 'smart-13', name: 'Smart 13', monthlyCost: 13, minutes: -1, minutesIntl: 300, sms: -1, data: 2.5, dataEES: 2.84, carrier: 'vodafone'},
      { id: 'smart-15', name: 'Smart 15', monthlyCost: 15, minutes: -1, minutesIntl: 300, sms: -1, data: 3.5, dataEES: 3.27, carrier: 'vodafone'},
      { id: 'smart-18', name: 'Smart 18', monthlyCost: 18, minutes: -1, minutesIntl: 600, sms: -1, data: 4, dataEES: 3.93, carrier: 'vodafone'},
      { id: 'mobil-7', name: 'Mobil 7', monthlyCost: 7, minutes: -1, minutesIntl: 100, sms: 1000, data: 1.5, dataEES: 1.5, carrier: 'telekom'},
      { id: 'mobil-9', name: 'Mobil 9', monthlyCost: 9, minutes: 1500, minutesIntl: 200, sms: 1500, data: 6, dataEES: 1.96, carrier: 'telekom'},
      { id: 'mobil-13', name: 'Mobil 13', monthlyCost: 13, minutes: -1, minutesIntl: 200, sms: -1, data: 2.5, dataEES: 2.5, carrier: 'telekom'},
      { id: 'mobil-17', name: 'Mobil 17', monthlyCost: 17, minutes: -1, minutesIntl: 600, sms: -1, data: 4.5, dataEES: 3.71, carrier: 'telekom'}
    ]

    let options = [
      { id: 'orange-net-9', name: 'Orange Net 9', monthlyCost: 9, data: 5, cloudStorage: 10, carrier: 'orange', plans: ['orange-me-8', 'orange-me-11']},
      { id: 'orange-net-11', name: 'Orange Net 11', monthlyCost: 11, data: 12, cloudStorage: 10, carrier: 'orange', plans: ['orange-me-8', 'orange-me-11']},
      { id: 'orange-net-15', name: 'Orange Net 15', monthlyCost: 15, data: 22, dataEES: 3.27, cloudStorage: 25, carrier: 'orange', plans: ['orange-me-8', 'orange-me-11', 'orange-me-15', 'orange-me-18']},
      { id: 'orange-net-25', name: 'Orange Net 25', monthlyCost: 25, data: 30, dataEES: 5.45, cloudStorage: 25, carrier: 'orange', plans: ['orange-me-8', 'orange-me-11', 'orange-me-15', 'orange-me-18']},
      { id: 'smart-net-8', name: 'Smart Net 8', monthlyCost: 8, data: 5, carrier: 'vodafone', plans: ['smart-11', 'smart-13', 'smart-15', 'smart-18']},
      { id: 'smart-net-10', name: 'Smart Net 10', monthlyCost: 10, data: 12, carrier: 'vodafone', plans: ['smart-11', 'smart-13', 'smart-15', 'smart-18']},
      { id: 'smart-net-14', name: 'Smart Net 14', monthlyCost: 14, data: 22, dataEES: 3.05, carrier: 'vodafone', plans: ['smart-11', 'smart-13', 'smart-15', 'smart-18']},
      { id: 'smart-net-25', name: 'Smart Net 25', monthlyCost: 25, data: 32, dataEES: 5.45, carrier: 'vodafone', plans: ['smart-11', 'smart-13', 'smart-15', 'smart-18']},
      { id: 'net-mobil-6', name: 'Net Mobil 6', monthlyCost: 6, data: 3, dataEES: 1.31, carrier: 'telekom', plans: ['mobil-7', 'mobil-9', 'mobil-13', 'mobil-17']},
      { id: 'net-mobil-9', name: 'Net Mobil 9', monthlyCost: 9, data: 5, dataEES: 1.96, carrier: 'telekom', plans: ['mobil-7', 'mobil-9', 'mobil-13', 'mobil-17']},
      { id: 'net-mobil-11', name: 'Net Mobil 11', monthlyCost: 11, data: 12, dataEES: 2.40, carrier: 'telekom', plans: ['mobil-7', 'mobil-9', 'mobil-13', 'mobil-17']}
    ]
    return {carriers, plans, options};
  }
}