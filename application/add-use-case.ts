export interface AddUserRequest {
    userName: string;
    emailAddress: string;
}

export interface EmailService {
    sendWelcomeLetter(emailAddress: string): void
}

export class RealEmailService implements EmailService {
   sendWelcomeLetter(emailAddress: string): void {
       throw new Error('Not actually implemented')
   }
}

export class AddUseCase {
    constructor(private emailService: EmailService) {}

    execute(addUserRquest: AddUserRequest) {
    
        this.emailService.sendWelcomeLetter(addUserRquest.emailAddress);
        this.emailService.sendWelcomeLetter('johnMaster@gmail.com');
    }
}