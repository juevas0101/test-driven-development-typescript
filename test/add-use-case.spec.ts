import { AddUseCase, AddUserRequest, EmailService, RealEmailService } from "../application/add-use-case";

describe('Add use case', () => {

  describe('method execute', () => {
    it('should send welcome letter to user added', () => {
      const expected = 'john@example.com';
      // Arrange
      const addUserRequest = {
        userName: 'John',
        emailAddress: expected,
      }

      const mockEmailService = new MockEmailService();
      const sut = new AddUseCase(mockEmailService);

      // Act
      sut.execute(addUserRequest);

      // Assert
      expect(mockEmailService.welcomeLetterEmailAddresses,).toContain(expected);
    });
  });

  describe('execute using jest with email service and single method mock', () => {
    it('should send welcome letter to user added', () => {
      const expected = 'john@example.com';
      // Arrange
      const addUserRequest = {
        userName: 'John',
        emailAddress: expected,
      }

      const welcomeLetterEmailAddresses: string[] = [];
      const mockEmailService = new RealEmailService();
      mockEmailService.sendWelcomeLetter = jest.fn(
        address => welcomeLetterEmailAddresses.push(address)
      );
      const sut = new AddUseCase(mockEmailService);

      // Act
      sut.execute(addUserRequest);

      // Assert
      expect(welcomeLetterEmailAddresses).toContain(expected);
    });
  });
});

class MockEmailService implements EmailService {
  public welcomeLetterEmailAddresses: string[] = [];
  sendWelcomeLetter(emailAddress: string): void {
    this.welcomeLetterEmailAddresses.push(emailAddress);
  }
}