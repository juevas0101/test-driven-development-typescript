export interface AddUserRequest {
    emailAddress: string;
    userName: string;
}

export interface EmailService {
    sendWelcomeLetter(emailAddress: string): void;
}

export class RealEmailService implements EmailService {
    sendWelcomeLetter(emailAddress: string): void {
        throw new Error("not actually implemented")
    }
}

export class AddUserCase {

    constructor(private emailService: EmailService) { }

    public execute(addUserRequest: AddUserRequest) {

        this.emailService.sendWelcomeLetter(addUserRequest.emailAddress);
        this.emailService.sendWelcomeLetter("testing@gmail.com");
    }
}