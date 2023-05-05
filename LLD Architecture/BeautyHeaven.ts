//LLD OF BEAUTY BOOKING WEBSITE------------------------------------------------------------
//user---city(location)---beauty-service---spa/parlor---professionals---timing---seats--booking--payment---feedback.

//BEAUTY SERVICES----------------------------------------------
// 1. Haircuts and styling
// 2. Hair coloring and highlights
// 3. Hair treatments
// 4. Facials
// 5. Waxing
// 6. Manicures and pedicures
// 7. Makeup application and lessons
// 8. Eyebrow shaping and tinting
// 9. Eyelash extensions and lifts
// 10. Massages and body treatments.

//There are several spa/beauty parlor within a city-- lets assume user select one ---- it has many professionals.

//PROFESSIONALS--------------------------------

// 1. Sarah Nguyen
// 2. Maria Rodriguez
// 3. Jennifer Lee
// 4. Samantha Smith
// 5. Olivia Brown

//SEATS--------------------------------

// 1. PLATINUM
// 2. GOLD
// 3. SILVER

class Customer {
    id: Number;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    password: string;
    gender: string;
    Booking: Booking[] | null;
    Feedback: Feedback[] | null;

    constructor(
        id: Number,
        first_name: string,
        last_name: string,
        email: string,
        mobile: string,
        password: string,
        gender: string
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
        this.gender = gender;
        this.Booking = [];
        this.Feedback = [];
    }
}

class BeautyService {
    id: number;
    name: string;
    description: string;
    duration: number;
    city: string;
    address: string;

    constructor(
        id: number,
        name: string,
        description: string,
        duration: number,
        city: string,
        address: string,
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.city = city;
        this.address = address;
     }

}


class Professionals {
    id: number;
    ProfessionalName: string;
    qualifications: string;
    email: string;
    experience: number;
    phoneNo: string;
    city: string;
    BeautyServiceId: number;
    status: boolean;
    image: string;
    isAvailable: boolean;
    TimingSlots: [] | null;
    Booking: Booking[] | null;
    constructor(
        id: number,
        ProfessionalName: string,
        qualifications: string,
        email: string,
        experience: number,
        phoneNo: string,
        city: string,
        BeautyServiceId: number,
        status: boolean,
        image: string,
        isAvailable: boolean
    ) {
        this.id = id;
        this.ProfessionalName =  ProfessionalName;
        this.qualifications = qualifications;
        this.email = email;
        this.experience = experience;
        this.phoneNo = phoneNo;
        this.city = city;
        this.BeautyServiceId = BeautyServiceId;
        this.status = status;
        this.image = image;
        this.isAvailable = isAvailable;
        this.TimingSlots = [];
        this.Booking = [];
    }

    getAllBookings() {
        return this.Booking;
    }
}

class TimingSlots {
     startTime: number;
     endTime: number;
     isAvailable: boolean;
  
    constructor(
      startTime: number,
      endTime: number, 
      isAvailable: boolean
      ) {
      this.startTime = startTime;
      this.endTime = endTime;
      this.isAvailable = isAvailable;
    }
}

class Booking {
    id: Number;
    CustomerId: Number;
    ProfessionalId: Number;
    CustomerName: String;
    ProfessionalName: String;
    ageOfCustomer: Number;
    gender: String;
    address: String;
    Description: String;
    BookingDate: String;
    status: Boolean;
    paymentStatus: Boolean;

    constructor(
        id: Number,
        CustomerId: Number,
        ProfessionalId: Number,
        CustomerName: String,
        ProfessionalName: String,
        ageOfCustomer: Number,
        gender: String,
        address: String,
        Description: String,
        BookingDate: String,
        status: Boolean,
        paymentStatus: Boolean
    ) {
        this.id = id;
        this.CustomerId = CustomerId;
        this.ProfessionalId = ProfessionalId;
        this.CustomerName = CustomerName;
        this.ProfessionalName = ProfessionalName;
        this.ageOfCustomer = ageOfCustomer;
        this.gender = gender;
        this.address = address;
        this.Description = Description;
        this.BookingDate = BookingDate;
        this.status = status;
        this.paymentStatus = paymentStatus;
    }
}

class Payment {
    id: number;
    CustomerId: number;
    amount: number;
    date: string;
    paymentMethod: string;
    constructor(
        id: number,
        CustomerID: number,
        amount: number,
        date: string,
        paymentMethod: string
    ) {
        this.id = id;
        this.CustomerId = CustomerID;
        this.amount = amount;
        this.date = date;
        this.paymentMethod = paymentMethod;
    }
}

class Feedback {
    id: number;
    CustomerId: Number;
    ProfessionalName: string;
    review: string;
    note: string;
    date: string;

    constructor(
        id: number,
        customerId: number,
        ProfessionalName: string,
        review: string,
        note: string,
        date: string

    ){
        this.id = id;
        this.CustomerId = customerId;
        this.ProfessionalName =ProfessionalName;
        this.review = review;
        this.note = note;
        this.date = date;

    }
    
    
}

class BeautyHeavenParlor {
    Customer: Customer[];
    BeautyService: BeautyService[];
    Professionals: Professionals[];
    TimingSlots: TimingSlots[];
    Booking: Booking[];
    Payment: Payment[];
    Feedback: Feedback[];

    constructor(
        Customer: Customer[] = [],
        BeautyService: BeautyService[] = [],
        Professionals: Professionals[] = [],
        TimingSlots: TimingSlots[] = [],
        Booking: Booking[] = [],
        Payment: Payment[] = [],
        Feedback: Feedback[] = [],
    ) {
        this.Customer = Customer;
        this.BeautyService = BeautyService;
        this.Professionals = Professionals;
        this.TimingSlots = TimingSlots;
        this.Booking = Booking;
        this.Payment = Payment;
        this.Feedback = Feedback;
    }

    registerCustomer(
        first_name: string,
        last_name: string,
        email: string,
        mobile: string,
        password: string,
        gender: string
    ) {
        const id = this.Customer.length + 1;
        const newCustomer = new Customer(
            id,
            first_name,
            last_name,
            email,
            mobile,
            password,
            gender
        );
        this.Customer.push(newCustomer);
        return newCustomer;
    }
}

const beautyHeavenParlor = new BeautyHeavenParlor();
const registerCustomer = beautyHeavenParlor.registerCustomer(
    "Nihar Ranjan",
    "Patra",
    "hero@gmail.com",
    "99696969",
    "hero@321",
    "male"
);

console.log(registerCustomer);
