import { AddUserCase, RealEmailService } from "../application/add-user-case";
import { EmailService } from "../application/add-user-case";

describe('AddUserCase', () => {

    it('should return welcome letter to user added', () => {
        //arrange
        const expected = "jovas@gmail.com";
        const addUserRequest = {
            userName: 'Jovas',
            emailAddress: expected,
        }

        const mockEmailService = new MockEmailService();
        const sut = new AddUserCase(mockEmailService);
        //act
        sut.execute(addUserRequest);
        //assert
        expect(mockEmailService.welcomeEmaulAddress).toContain(expected);
        //??
    })

    describe('execute using jest', () => {
        it('should return welcome letter to user added', () => {
            //arrange
            const expected = "jovas@gmail.com";
            const addUserRequest = {
                 userName: 'Jovas',
                emailAddress: expected,
            }
            const welcomeLetterEmailAddresses: string[] = [];
            const mockEmailService = {
                sendWelcomeLetter: jest.fn(
                    address => welcomeLetterEmailAddresses.push(address)
                )
            }
            const sut = new AddUserCase(mockEmailService);
            //act
            sut.execute(addUserRequest);
            //assert
            expect(welcomeLetterEmailAddresses).toContain(expected);
            //??
        })
    })
    describe('execute using jest with real email service and single method mocking', () => {
        it('should return welcome letter to user added', () => {
            //arrange
            const expected = "jovas@gmail.com";
            const addUserRequest = {
                userName: 'Jovas',
                emailAddress: expected,
            }
            const welcomeLetterEmailAddresses: string[] = [];
            const mockEmailService = new RealEmailService();
            mockEmailService.sendWelcomeLetter = jest.fn(
                address => welcomeLetterEmailAddresses.push(address)
            )
            const sut = new AddUserCase(mockEmailService);
            //act
            sut.execute(addUserRequest);
            //assert
            expect(welcomeLetterEmailAddresses).toContain(expected);
            //??
        })
    })

    
})

class MockEmailService implements EmailService {
    public welcomeEmaulAddress: string[] = [];
    sendWelcomeLetter(emailAddress: string): void {
        this.welcomeEmaulAddress.push(emailAddress);
    }
}